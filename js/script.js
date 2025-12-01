document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Animation ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // --- Charts Configuration ---
    Chart.defaults.color = '#B3B3B3';
    Chart.defaults.font.family = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

    // 1. Financials: Revenue vs Net Loss
    const ctxFinancials = document.getElementById('financialsChart').getContext('2d');
    new Chart(ctxFinancials, {
        type: 'bar',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Ingresos (Billones €)',
                data: [6.7, 7.8, 9.6, 11.7, 13.2],
                backgroundColor: '#1DB954',
                borderRadius: 4
            }, {
                label: 'Pérdida/Beneficio Neto (Millones €)',
                data: [-186, -581, -34, -430, -532], // Realistic losses
                backgroundColor: '#E91E63',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: { display: true, text: 'Ingresos vs Rentabilidad (Anual)', color: '#FFF', font: { size: 16 } }
            },
            scales: {
                y: { grid: { color: '#333' } },
                x: { grid: { display: false } }
            }
        }
    });

    // 2. Revenue Split Pie Chart
    const ctxRevenueSplit = document.getElementById('revenueSplitChart').getContext('2d');
    new Chart(ctxRevenueSplit, {
        type: 'doughnut',
        data: {
            labels: ['Suscripciones Premium', 'Publicidad (Ad-Supported)'],
            datasets: [{
                data: [87, 13],
                backgroundColor: ['#1DB954', '#FFFFFF'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: { display: true, text: 'Fuente de Ingresos (%)', color: '#FFF', font: { size: 16 } },
                legend: { position: 'bottom' }
            }
        }
    });

    // 3. Market Share Radar Chart
    const ctxMarketShare = document.getElementById('marketShareChart').getContext('2d');
    new Chart(ctxMarketShare, {
        type: 'pie', // Changed to pie for better market share viz
        data: {
            labels: ['Spotify', 'Apple Music', 'Amazon Music', 'Tencent', 'YouTube Music', 'Otros'],
            datasets: [{
                data: [30.5, 13.7, 13.3, 13.4, 8.9, 20.2],
                backgroundColor: ['#1DB954', '#FA243C', '#25D1DA', '#0052D4', '#FF0000', '#B3B3B3'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: { display: true, text: 'Cuota de Mercado Global de Streaming', color: '#FFF', font: { size: 16 } },
                legend: { position: 'right' }
            }
        }
    });

    // 4. User Growth Line Chart
    const ctxUserGrowth = document.getElementById('userGrowthChart').getContext('2d');
    new Chart(ctxUserGrowth, {
        type: 'line',
        data: {
            labels: ['Q1 2020', 'Q1 2021', 'Q1 2022', 'Q1 2023', 'Q1 2024'],
            datasets: [{
                label: 'Usuarios Activos Mensuales (MAUs)',
                data: [286, 356, 422, 515, 615],
                borderColor: '#1DB954',
                backgroundColor: 'rgba(29, 185, 84, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Suscriptores Premium',
                data: [130, 158, 182, 210, 239],
                borderColor: '#FFFFFF',
                borderDash: [5, 5],
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: { display: true, text: 'Crecimiento de Usuarios (Millones)', color: '#FFF', font: { size: 16 } }
            },
            scales: {
                y: { grid: { color: '#333' } },
                x: { grid: { display: false } }
            }
        }
    });

    // 5. Payout Per Stream Bar Chart
    const ctxPayout = document.getElementById('payoutChart').getContext('2d');
    new Chart(ctxPayout, {
        type: 'bar',
        data: {
            labels: ['Tidal', 'Apple Music', 'Spotify', 'YouTube Music'],
            datasets: [{
                label: 'Pago estimado por stream ($)',
                data: [0.013, 0.01, 0.004, 0.008],
                backgroundColor: ['#000', '#FA243C', '#1DB954', '#FF0000'],
                borderColor: '#333',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: { display: true, text: 'Comparativa de Pago por Stream', color: '#FFF', font: { size: 16 } }
            },
            scales: {
                x: { grid: { color: '#333' } }
            }
        }
    });
});
