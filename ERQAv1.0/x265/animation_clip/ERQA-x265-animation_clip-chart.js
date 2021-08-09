
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
                    bar_options.series.push({name: '', data: [0.828, 0.879, 0.924, 1.0, 1.395, 1.891, 1.987, 2.208, 2.282, 2.537, 2.793, 2.851, 2.862, 3.098, 3.098]});
                    bar_options.xAxis.categories = ['topaz-amq-12 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'only compressed (100%)', 'RealSR (50%, x4)', 'only compressed (50%)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'DynaVSR-R (50%, x2)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'iSeeBetter (50%, x2)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (ERQAv1.0)";
                    Highcharts.chart('ERQA-x265-animation_clip-chart', bar_options);
                });
            });
            
            