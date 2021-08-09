
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
                    bar_options.series.push({name: '', data: [0.035, 0.041, 0.048, 0.049, 0.05, 0.05, 0.053, 0.053, 0.105, 0.109, 0.129, 0.135, 0.146, 1.0, 1.266]});
                    bar_options.xAxis.categories = ['waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'iSeeBetter (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'RealSR (50%, x4)', 'DynaVSR-R (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'only compressed (100%)', 'only compressed (50%)'];
                    bar_options.yAxis.title.text = "BSQ-rate (YUV-MS-SSIM)";
                    Highcharts.chart('MSSSIM-H.266-street_show-chart', bar_options);
                });
            });
            
            