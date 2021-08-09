
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
                
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.84, 0.7482484918535648], [1.704, 1.7791193821918025], [3.526, 2.314119772986039]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.84, 0.9611197516320642], [1.704, 1.9217813176063832], [3.526, 2.499834396411091]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.84, 0.6604826458459312], [1.704, 1.5595862380511059], [3.526, 2.218368671241655]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.84, 1.8067411284128116], [1.704, 2.927734220646479], [3.526, 3.2812072497936495]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.84, 1.1088562759647247], [1.704, 2.2057723151698982], [3.526, 2.8003759673208664]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.84, 0.5335367375086699], [1.704, 1.6288078411542986], [3.526, 2.472852420878713]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.84, 0.9008859954894437], [1.704, 2.2474834699712907], [3.526, 2.9102492895237195]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.879, 0.37305503931343464], [1.744, 3.005382752858513], [3.493, 3.938912436749076]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.853, 1.3569713468757438], [1.732, 2.602325738927401], [3.567, 2.9874236520131543]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.84, 4.489844697287486], [1.704, 4.988842125244178], [3.526, 4.948147684498817]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.84, 5.126603887579362], [1.704, 5.626282963063225], [3.526, 5.489978396797607]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.84, 5.058743089050765], [1.704, 4.892131682039313], [3.526, 5.1305514857941485]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.84, 1.3522919877852126], [1.704, 2.2271560452490213], [3.526, 2.6530997287257256]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.84, 1.4229987629799188], [1.704, 2.3172526132108247], [3.526, 2.6296956924207557]]});
                        
                        plot_options.title.text = 'Subjective';
                        plot_options.subtitle.text = 'x264 + skiing_2';
                        plot_options.yAxis.title.text = 'Subjective';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('Subjective-x264-skiing_2-graph', plot_options);

                    });
                });

        
            