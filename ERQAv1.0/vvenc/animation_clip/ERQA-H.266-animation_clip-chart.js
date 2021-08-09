
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
                    bar_options.series.push({name: '', data: [1.0, 1.547, 1.582, 1.787, 2.296, 5.385, 5.87, 5.953, 17.912, 17.912, 17.912, 17.912, 17.912, 17.912, 17.912]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'RealSR (50%, x4)', 'waifu2x_anime (50%, x2)', 'only compressed (50%)', 'waifu2x_cunet (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'iSeeBetter (50%, x2)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'DynaVSR-R (50%, x2)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (ERQAv1.0)";
                    Highcharts.chart('ERQA-H.266-animation_clip-chart', bar_options);
                });
            });
            
            