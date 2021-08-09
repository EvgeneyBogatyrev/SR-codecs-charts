
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
                    bar_options.series.push({name: '', data: [0.753, 0.868, 0.892, 0.92, 0.939, 0.944, 0.953, 0.956, 0.968, 1.0, 1.036, 1.047, 1.049, 1.107, 1.112]});
                    bar_options.xAxis.categories = ['topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'only compressed (50%)', 'iSeeBetter (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)', 'RealSR (50%, x4)', 'DynaVSR-R (50%, x2)', 'only compressed (100%)', 'LGFN (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (LPIPS)";
                    Highcharts.chart('LPIPS-x264-skiing-chart', bar_options);
                });
            });
            
            