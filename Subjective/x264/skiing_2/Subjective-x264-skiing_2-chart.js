
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
                        bar_options.series.push({name: '', data: [39.347, 41.797, 43.954, 97.655, 100.0, 109.713, 113.883, 121.014, 124.04, 124.693, 134.072, 137.416, 148.477, 149.657]});
                        bar_options.xAxis.categories = ['topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'RealSR (50%, x4)', 'only compressed (100%)', 'only compressed (50%)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'iSeeBetter (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'DynaVSR-R (50%, x2)', 'DBVSR (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'LGFN (50%, x4)'];
                        bar_options.yAxis.title.text = "BSQ-rate (Subjective)";
                        Highcharts.chart('Subjective-x264-skiing_2-chart', bar_options);
                    });
                });
            
            