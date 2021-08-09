
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
                    bar_options.series.push({name: '', data: [0.184, 0.201, 0.257, 1.0, 1.439, 1.716, 1.765, 1.77, 1.996, 2.619, 2.687, 2.906, 4.785, 4.785, 4.785]});
                    bar_options.xAxis.categories = ['topaz-amq-12 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'only compressed (100%)', 'DynaVSR-R (50%, x2)', 'RealSR (50%, x4)', 'waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'iSeeBetter (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'only compressed (50%)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF)";
                    Highcharts.chart('VMAFCLIPPED-H.266-animation_clip-chart', bar_options);
                });
            });
            
            