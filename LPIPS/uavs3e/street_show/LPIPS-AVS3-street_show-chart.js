
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
                    bar_options.series.push({name: '', data: [0.986, 0.995, 1.0, 1.058, 1.755, 1.763, 1.818, 1.896, 1.986, 2.039, 2.243, 2.401, 2.453, 2.775, 3.07]});
                    bar_options.xAxis.categories = ['topaz-ahq-11 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'only compressed (100%)', 'topaz-amq-12 (50%, x2)', 'DynaVSR-R (50%, x2)', 'EGVSR (50%, x2)', 'iSeeBetter (50%, x2)', 'only compressed (50%)', 'SOF-VSR-BD (50%, x4)', 'RealSR (50%, x4)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (LPIPS)";
                    Highcharts.chart('LPIPS-AVS3-street_show-chart', bar_options);
                });
            });
            
            