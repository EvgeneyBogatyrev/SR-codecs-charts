
                    $(function () {
                        $(document).ready(function() {
                            plot_options = {
                            chart: {
                                zoomType: 'xy'
                            },
                            title: {
                                text: ''
                            },
                            subtitle: {
                                text: ''
                            },
                            yAxis: {
                                title: {
                                    text: ''
                                }
                            },
                            xAxis: {
                                title: {
                                        text: ''
                                }
                            },
                            legend: {
                                layout: 'vertical',
                                align: 'right',
                                verticalAlign: 'bottom',
                                floating: true,
                                itemStyle: {
                                    "fontSize" : "10px",
                                },
                                width: 340,
                                layout: 'horizontal',
                                y: -50,
                            },
                            colors: [
                                '#5FADF5',
                                '#5FF5D2',
                                '#E6845E',
                                '#E3E645',
                                '#000000',
                                '#E66ADB',
                                '#AB9EE6',
                                '#407A5B'
                            ],
                            plotOptions: {
                                series: {
                                    label: {
                                        connectorAllowed: false
                                    },
                                }
                            },
                            navigation: {
                                buttonOptions: {
                                    align: 'right',
                                    verticalAlign: 'top',
                                    y: 0
                                }
                            },
                            series: [],
                            responsive: {
                                rules: [{
                                    condition: {
                                        maxWidth: 500
                                    },
                                    chartOptions: {
                                        legend: {
                                            layout: 'horizontal',
                                            align: 'center',
                                            verticalAlign: 'bottom'
                                        }
                                    }
                                }]
                            },
                            credits: {
                                text: 'videoprocessing.ai',
                                href: 'https://videoprocessing.ai/'
                                },
                            };
                
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[1.07, 0.3446855945533455], [2.105, 1.3585402805405506], [4.103, 2.0249918325018665]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[1.07, 1.0880057255660092], [2.105, 2.2230263252039335], [4.103, 2.793651577656885]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[1.07, 0.4559763699862797], [2.105, 1.3063857631393454], [4.103, 1.8466190999277547]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[1.07, 1.205376494073865], [2.105, 1.8959287891574579], [4.103, 2.3120014187790443]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[1.07, 0.5806071291613111], [2.105, 1.753688220928881], [4.103, 2.5227278632898424]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[1.07, 0.3817208589206837], [2.105, 1.3258346817308981], [4.103, 1.999494763762578]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[1.07, 0.5448551076846715], [2.105, 2.6155412202721013], [4.103, 2.4090217158833127]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[1.114, 0.36058920027830504], [2.181, 2.980565186826633], [4.264, 3.859594489883725]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[1.066, 1.0003872291832256], [2.103, 2.4107224747268132], [4.103, 2.723867335305494]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[1.07, 3.4087622402094953], [2.105, 4.605565414204968], [4.103, 5.025047892677422]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[1.07, 3.501495384879112], [2.105, 4.289695918238164], [4.103, 4.566076435202389]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[1.07, 3.7096633020412337], [2.105, 4.170582086182452], [4.103, 4.576381524158334]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[1.07, 0.8499179491931372], [2.105, 1.5893905184283252], [4.103, 2.39244806871208]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[1.07, 0.7507170779183887], [2.105, 1.536966662444149], [4.103, 2.2535673214874925]]});
                        
                        plot_options.title.text = 'Subjective';
                        plot_options.subtitle.text = 'x264 + street_show_2';
                        plot_options.yAxis.title.text = 'Subjective';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('Subjective-x264-street_show_2-graph', plot_options);

                    });
                });

        
            