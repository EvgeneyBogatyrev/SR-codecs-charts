
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
                    bar_options.series.push({name: '', data: [0.587, 0.697, 0.762, 0.917, 1.0, 1.18, 1.87, 2.502, 2.585, 2.585, 2.585, 2.585, 2.585, 2.585, 2.585]});
                    bar_options.xAxis.categories = ['topaz-amqs-1 (50%, x2)', 'RealSR (50%, x4)', 'iSeeBetter (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'only compressed (100%)', 'DBVSR (50%, x4)', 'topaz-amq-12 (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'LGFN (50%, x4)', 'EGVSR (50%, x2)', 'only compressed (50%)', 'DynaVSR-R (50%, x2)', 'waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (Y-PSNR)";
                    Highcharts.chart('PSNR-AVS3-animation_clip-chart', bar_options);
                });
            });
            
            