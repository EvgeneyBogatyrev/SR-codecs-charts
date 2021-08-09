
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
                        bar_options.series.push({name: '', data: [17.458, 25.679, 29.787, 87.309, 93.935, 100.0, 101.917, 107.28, 110.457, 111.556, 114.172, 119.686, 122.303, 124.158]});
                        bar_options.xAxis.categories = ['topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'iSeeBetter (50%, x2)', 'RealSR (50%, x4)', 'only compressed (100%)', 'only compressed (50%)', 'waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'DynaVSR-R (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)'];
                        bar_options.yAxis.title.text = "BSQ-rate (Subjective)";
                        Highcharts.chart('Subjective-x264-street_show_1-chart', bar_options);
                    });
                });
            
            