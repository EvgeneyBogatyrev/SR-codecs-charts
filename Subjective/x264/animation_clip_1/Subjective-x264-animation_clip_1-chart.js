
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
                        bar_options.series.push({name: '', data: [68.842, 78.839, 98.431, 100.0, 188.193, 205.946, 239.535, 246.919, 261.647, 305.662, 334.39, 337.39, 356.39, 365.39]});
                        bar_options.xAxis.categories = ['topaz-amq-12 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'only compressed (100%)', 'only compressed (50%)', 'RealSR (50%, x4)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'iSeeBetter (50%, x2)', 'DynaVSR-R (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)'];
                        bar_options.yAxis.title.text = "BSQ-rate (Subjective)";
                        Highcharts.chart('Subjective-x264-animation_clip_1-chart', bar_options);
                    });
                });
            
            