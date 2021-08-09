
            $(function () {
                $(document).ready(function() {
                    var bar_options = {
                        title: {
                            text: ''
                        },
                        subtitle: {
                            text: ''
                        },
                        chart: {
                            type: 'bar',
                            zoomType: 'xy'
                        },
                        legend: {
                            enabled: false
                        },
                        xAxis: {
                            title: {
                                text: ''
                            }
                        },
                        yAxis: {min: 0, title: {text: ''}},
                        plotOptions: {bar: {dataLabels: {enabled: true}}},
                        series: [],
                        credits: {
                            text: 'videoprocessing.ai',
                            href: 'https://videoprocessing.ai/'
                            },
                    };
                    bar_options.series.push({name: '', data: [1.0, 1.222, 1.233, 1.36, 1.391, 1.411, 1.475, 1.48, 1.6, 1.631, 1.769, 1.997, 2.042, 2.724, 2.998]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'DynaVSR-R (50%, x2)', 'iSeeBetter (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'RealSR (50%, x4)', 'only compressed (50%)', 'topaz-amqs-1 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (YUV-MS-SSIM)";
                    Highcharts.chart('MSSSIM-libaom-av1-skiing-chart', bar_options);
                });
            });
            
            