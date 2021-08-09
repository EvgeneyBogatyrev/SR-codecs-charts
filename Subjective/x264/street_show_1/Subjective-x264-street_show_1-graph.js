
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
                
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[1.07, 1.4033131534678864], [2.105, 2.9234136228266063], [4.103, 3.926236169078271]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[1.07, 1.3372814261027657], [2.105, 3.355187377144545], [4.103, 4.349331007773202]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[1.07, 1.2099445051270783], [2.105, 2.79855311095871], [4.103, 3.7369242868991583]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[1.07, 2.2776788362901454], [2.105, 3.9787965078220724], [4.103, 4.557615561913759]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[1.07, 1.184070894925689], [2.105, 3.259598912944556], [4.103, 4.4411238893976615]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[1.07, 1.2284822632383443], [2.105, 2.954811275712428], [4.103, 3.810569397628411]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[1.07, 0.8180248095789937], [2.105, 4.462063420058592], [4.103, 4.332836158655112]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[1.114, 0.45790353944125], [2.181, 3.9367503439249805], [4.264, 5.629845974855052]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[1.066, 1.8408451862219117], [2.103, 3.659278953698293], [4.103, 4.283729581380214]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[1.07, 5.25864595980295], [2.105, 7.056603132724104], [4.103, 7.447854215678194]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[1.07, 6.846416773790219], [2.105, 7.220886778916255], [4.103, 6.872768003810404]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[1.07, 6.60298411377122], [2.105, 6.896267756316008], [4.103, 6.927889899570265]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[1.07, 1.3662888124425112], [2.105, 3.524199676128863], [4.103, 4.499183548471289]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[1.07, 1.5172779820735378], [2.105, 3.3947091986092603], [4.103, 4.375857472049954]]});
                        
                        plot_options.title.text = 'Subjective';
                        plot_options.subtitle.text = 'x264 + street_show_1';
                        plot_options.yAxis.title.text = 'Subjective';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('Subjective-x264-street_show_1-graph', plot_options);

                    });
                });

        
            