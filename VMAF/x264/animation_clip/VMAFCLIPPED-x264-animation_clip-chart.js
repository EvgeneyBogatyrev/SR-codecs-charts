
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
                    bar_options.series.push({name: '', data: [0.84, 0.991, 0.998, 1.0, 1.171, 1.362, 1.404, 1.449, 1.481, 1.494, 1.541, 1.549, 1.554, 1.847, 1.857]});
                    bar_options.xAxis.categories = ['topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'only compressed (100%)', 'only compressed (50%)', 'RealSR (50%, x4)', 'waifu2x_cunet (50%, x2)', 'DynaVSR-R (50%, x2)', 'waifu2x_anime (50%, x2)', 'iSeeBetter (50%, x2)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF)";
                    Highcharts.chart('VMAFCLIPPED-x264-animation_clip-chart', bar_options);
                });
            });
            
            