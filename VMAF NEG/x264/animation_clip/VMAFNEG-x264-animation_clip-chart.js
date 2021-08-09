
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
                    bar_options.series.push({name: '', data: [0.821, 0.833, 0.865, 1.0, 1.089, 1.127, 1.169, 1.212, 1.247, 1.25, 1.31, 1.318, 1.321, 1.71, 1.71]});
                    bar_options.xAxis.categories = ['topaz-amqs-1 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'only compressed (100%)', 'only compressed (50%)', 'RealSR (50%, x4)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'DynaVSR-R (50%, x2)', 'iSeeBetter (50%, x2)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF NEG)";
                    Highcharts.chart('VMAFNEG-x264-animation_clip-chart', bar_options);
                });
            });
            
            