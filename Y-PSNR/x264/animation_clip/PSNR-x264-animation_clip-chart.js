
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
                    bar_options.series.push({name: '', data: [0.278, 0.312, 0.568, 0.575, 0.622, 0.634, 0.683, 0.724, 0.789, 0.794, 0.795, 0.796, 0.823, 0.919, 1.0]});
                    bar_options.xAxis.categories = ['waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'RealSR (50%, x4)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'iSeeBetter (50%, x2)', 'topaz-amq-12 (50%, x2)', 'only compressed (50%)', 'DBVSR (50%, x4)', 'EGVSR (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'LGFN (50%, x4)', 'DynaVSR-R (50%, x2)', 'only compressed (100%)'];
                    bar_options.yAxis.title.text = "BSQ-rate (Y-PSNR)";
                    Highcharts.chart('PSNR-x264-animation_clip-chart', bar_options);
                });
            });
            
            