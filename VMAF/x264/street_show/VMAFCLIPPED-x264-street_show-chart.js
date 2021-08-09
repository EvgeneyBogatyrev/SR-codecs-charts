
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
                    bar_options.series.push({name: '', data: [0.727, 0.754, 0.769, 0.94, 0.963, 0.978, 1.0, 1.151, 1.167, 1.211, 1.214, 1.216, 1.234, 1.508, 1.518]});
                    bar_options.xAxis.categories = ['topaz-amq-12 (50%, x2)', 'topaz-amqs-1 (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'iSeeBetter (50%, x2)', 'only compressed (50%)', 'DynaVSR-R (50%, x2)', 'only compressed (100%)', 'waifu2x_cunet (50%, x2)', 'waifu2x_anime (50%, x2)', 'DBVSR (50%, x4)', 'SOF-VSR-BI (50%, x4)', 'LGFN (50%, x4)', 'RealSR (50%, x4)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (VMAF)";
                    Highcharts.chart('VMAFCLIPPED-x264-street_show-chart', bar_options);
                });
            });
            
            