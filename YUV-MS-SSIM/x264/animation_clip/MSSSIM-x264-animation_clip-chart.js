
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
                    bar_options.series.push({name: '', data: [0.645, 0.651, 0.656, 0.657, 0.767, 0.789, 0.813, 0.93, 0.938, 0.957, 0.961, 0.968, 1.0, 1.015, 1.023]});
                    bar_options.xAxis.categories = ['topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'RealSR (50%, x4)', 'topaz-amqs-1 (50%, x2)', 'waifu2x_cunet (50%, x2)', 'only compressed (50%)', 'waifu2x_anime (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'DynaVSR-R (50%, x2)', 'LGFN (50%, x4)', 'iSeeBetter (50%, x2)', 'DBVSR (50%, x4)', 'only compressed (100%)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (YUV-MS-SSIM)";
                    Highcharts.chart('MSSSIM-x264-animation_clip-chart', bar_options);
                });
            });
            
            