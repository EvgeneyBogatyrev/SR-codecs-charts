
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
                    bar_options.series.push({name: '', data: [0.345, 0.417, 0.612, 0.776, 0.838, 0.863, 0.882, 0.894, 0.984, 1.0, 1.332, 1.392, 1.479, 1.509, 1.523]});
                    bar_options.xAxis.categories = ['waifu2x_anime (50%, x2)', 'waifu2x_cunet (50%, x2)', 'RealSR (50%, x4)', 'iSeeBetter (50%, x2)', 'SOF-VSR-BI (50%, x4)', 'DynaVSR-R (50%, x2)', 'LGFN (50%, x4)', 'DBVSR (50%, x4)', 'only compressed (50%)', 'only compressed (100%)', 'topaz-amqs-1 (50%, x2)', 'SOF-VSR-BD (50%, x4)', 'EGVSR (50%, x2)', 'topaz-ahq-11 (50%, x2)', 'topaz-amq-12 (50%, x2)'];
                    bar_options.yAxis.title.text = "BSQ-rate (Y-PSNR)";
                    Highcharts.chart('PSNR-x265-skiing-chart', bar_options);
                });
            });
            
            