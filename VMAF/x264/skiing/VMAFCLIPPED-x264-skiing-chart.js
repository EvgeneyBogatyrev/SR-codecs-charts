
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
                    bar_options.series.push({name: '', data: [0.766, 0.781, 0.883, 0.887, 1.0, 1.038, 1.071, 1.085, 1.101, 1.171, 1.174, 1.178, 1.184, 1.542, 1.563]});
                    bar_options.xAxis.categories = ['topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'only compressed (50%)', 'only compressed (100%)', 'DynaVSR-R (50%, x2)', 'iSeeBetter (50%, x2)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'DBVSR (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'LGFN (50%, x4)', 'RealSR (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF)";
                    Highcharts.chart('VMAFCLIPPED-x264-skiing-chart', bar_options);
                });
            });
            
            