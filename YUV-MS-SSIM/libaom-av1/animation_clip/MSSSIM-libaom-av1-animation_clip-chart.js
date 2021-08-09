
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
                    bar_options.series.push({name: '', data: [1.0, 1.795, 2.597, 2.778, 2.798, 3.771, 6.058, 7.55, 12.13, 12.267, 13.591, 15.744, 15.782, 15.782, 15.782]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'RealSR (50%, x4)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'DynaVSR-R (50%, x2)', 'only compressed (50%)', 'iSeeBetter (50%, x2)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (YUV-MS-SSIM)";
                    Highcharts.chart('MSSSIM-libaom-av1-animation_clip-chart', bar_options);
                });
            });
            
            