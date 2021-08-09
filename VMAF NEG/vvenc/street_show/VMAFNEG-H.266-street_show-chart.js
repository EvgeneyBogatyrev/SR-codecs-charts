
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
                    bar_options.series.push({name: '', data: [0.819, 1.0, 1.027, 1.197, 1.247, 1.261, 1.496, 1.497, 1.501, 1.507, 1.551, 1.604, 1.651, 3.138, 3.212]});
                    bar_options.xAxis.categories = ['DynaVSR-R (50%, x2)', 'only compressed (100%)', 'iSeeBetter (50%, x2)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'topaz-amq-12 (50%, x2)', 'DBVSR (50%, x4)', 'LGFN (50%, x4)', 'only compressed (50%)', 'RealSR (50%, x4)', 'topaz-ahq-11 (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF NEG)";
                    Highcharts.chart('VMAFNEG-H.266-street_show-chart', bar_options);
                });
            });
            
            