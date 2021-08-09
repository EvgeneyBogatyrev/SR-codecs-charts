
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
                    bar_options.series.push({name: '', data: [0.502, 0.586, 0.619, 1.0, 1.023, 1.286, 1.41, 1.429, 1.454, 1.517, 1.546, 1.563, 1.601, 1.609, 1.702]});
                    bar_options.xAxis.categories = ['topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'only compressed (100%)', 'RealSR (50%, x4)', 'only compressed (50%)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'EGVSR (50%, x2)', 'iSeeBetter (50%, x2)', 'DynaVSR-R (50%, x2)', 'LGFN (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'DBVSR (50%, x4)', 'SOF-VSR-BI (50%, x4)'];
                    bar_options.yAxis.title.text = "BSQ-rate (LPIPS)";
                    Highcharts.chart('LPIPS-x264-animation_clip-chart', bar_options);
                });
            });
            
            