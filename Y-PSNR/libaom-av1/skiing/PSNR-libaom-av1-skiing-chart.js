
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
                    bar_options.series.push({name: '', data: [0.175, 0.291, 0.624, 0.778, 0.968, 1.0, 1.045, 1.07, 1.081, 2.044, 3.487, 6.555, 7.017, 7.017, 7.017]});
                    bar_options.xAxis.categories = ['waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'RealSR (50%, x4)', 'iSeeBetter (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'only compressed (100%)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'DynaVSR-R (50%, x2)', 'only compressed (50%)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'topaz-amq-12 (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (Y-PSNR)";
                    Highcharts.chart('PSNR-libaom-av1-skiing-chart', bar_options);
                });
            });
            
            