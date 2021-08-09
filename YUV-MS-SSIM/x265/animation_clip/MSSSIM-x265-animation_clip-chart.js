
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
                    bar_options.series.push({name: '', data: [0.748, 0.756, 0.802, 0.823, 0.836, 0.841, 1.0, 1.025, 1.117, 1.184, 1.187, 1.187, 1.256, 1.278, 1.36]});
                    bar_options.xAxis.categories = ['topaz-ahq-11 (50%, x2)', 'RealSR (50%, x4)', 'waifu2x_cunet (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'waifu2x_anime (50%, x2)', 'only compressed (100%)', 'only compressed (50%)', 'SOF-VSR-BI (50%, x4)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'iSeeBetter (50%, x2)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'DynaVSR-R (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (YUV-MS-SSIM)";
                    Highcharts.chart('MSSSIM-x265-animation_clip-chart', bar_options);
                });
            });
            
            