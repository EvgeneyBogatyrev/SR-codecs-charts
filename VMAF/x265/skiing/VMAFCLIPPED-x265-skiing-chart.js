
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
                    bar_options.series.push({name: '', data: [1.0, 1.018, 1.096, 1.271, 1.353, 1.498, 1.572, 1.594, 1.621, 1.754, 1.755, 1.765, 1.804, 2.218, 2.233]});
                    bar_options.xAxis.categories = ['only compressed (100%)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'only compressed (50%)', 'DynaVSR-R (50%, x2)', 'iSeeBetter (50%, x2)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'DBVSR (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'LGFN (50%, x4)', 'RealSR (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF)";
                    Highcharts.chart('VMAFCLIPPED-x265-skiing-chart', bar_options);
                });
            });
            
            