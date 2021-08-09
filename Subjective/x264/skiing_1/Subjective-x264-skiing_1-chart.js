
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
                        bar_options.series.push({name: '', data: [9.077, 11.789, 15.797, 44.747, 52.671, 61.109, 64.119, 64.228, 66.132, 71.318, 73.611, 74.698, 76.67, 100.0]});
                        bar_options.xAxis.categories = ['topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'only compressed (50%)', 'RealSR (50%, x4)', 'DynaVSR-R (50%, x2)', 'waifu2x_anime (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'waifu2x_cunet (50%, x2)', 'iSeeBetter (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'only compressed (100%)'];
                        bar_options.yAxis.title.text = "BSQ-rate (Subjective)";
                        Highcharts.chart('Subjective-x264-skiing_1-chart', bar_options);
                    });
                });
            
            