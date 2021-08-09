
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
                        bar_options.series.push({name: '', data: [30.304, 33.914, 33.99, 98.56, 100.0, 107.817, 119.191, 128.175, 136.829, 146.063, 146.343, 151.392, 151.573, 152.82]});
                        bar_options.xAxis.categories = ['topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'iSeeBetter (50%, x2)', 'only compressed (100%)', 'only compressed (50%)', 'DynaVSR-R (50%, x2)', 'RealSR (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'SOF-VSR-BI (50%, x4)'];
                        bar_options.yAxis.title.text = "BSQ-rate (Subjective)";
                        Highcharts.chart('Subjective-x264-street_show_2-chart', bar_options);
                    });
                });
            
            