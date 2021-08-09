
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
                        bar_options.series.push({name: '', data: [35.763, 48.351, 54.418, 89.59, 100.0, 110.83, 116.803, 117.619, 134.759, 135.174, 135.31, 143.004, 143.757, 152.732]});
                        bar_options.xAxis.categories = ['topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'RealSR (50%, x4)', 'only compressed (100%)', 'waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'iSeeBetter (50%, x2)', 'DBVSR (50%, x4)', 'only compressed (50%)', 'SOF-VSR-BI (50%, x4)', 'DynaVSR-R (50%, x2)', 'LGFN (50%, x4)'];
                        bar_options.yAxis.title.text = "BSQ-rate (Subjective)";
                        Highcharts.chart('Subjective-x264-animation_clip_2-chart', bar_options);
                    });
                });
            
            