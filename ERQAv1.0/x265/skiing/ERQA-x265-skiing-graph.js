
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
            
                        plot_options.series.push({name: 'DBVSR (50%, x4)', data: [[0.091, 0.386729077490137], [0.257, 0.5277698491382538], [0.508, 0.5948541796478817], [0.847, 0.6310493792129344], [1.708, 0.6678212362165054], [3.487, 0.6924452614255363], [5.325, 0.7025720467224958]]});
                        
                        plot_options.series.push({name: 'DynaVSR-R (50%, x2)', data: [[0.091, 0.3796998536548133], [0.257, 0.5319788695390855], [0.508, 0.607962432962786], [0.847, 0.6504438267877798], [1.708, 0.6937774893303272], [3.487, 0.7218208217587812], [5.325, 0.7324968472128232]]});
                        
                        plot_options.series.push({name: 'EGVSR (50%, x2)', data: [[0.091, 0.16717001262251677], [0.257, 0.19670497932921585], [0.508, 0.2116118515943421], [0.847, 0.21854254352964728], [1.708, 0.22395151307283165], [3.487, 0.2283960023178566], [5.325, 0.22990791918035217]]});
                        
                        plot_options.series.push({name: 'iSeeBetter (50%, x2)', data: [[0.091, 0.16594507592256957], [0.257, 0.1951055621827387], [0.508, 0.20995631383655886], [0.847, 0.6523540476281126], [1.708, 0.6941230005532653], [3.487, 0.722807915093373], [5.325, 0.23097109097736318]]});
                        
                        plot_options.series.push({name: 'LGFN (50%, x4)', data: [[0.091, 0.3901362905606519], [0.257, 0.5284035581058438], [0.508, 0.5940033889789474], [0.847, 0.6299104218522094], [1.708, 0.6653784695667331], [3.487, 0.6894302333459038], [5.325, 0.6998203831957099]]});
                        
                        plot_options.series.push({name: 'only compressed (100%)', data: [[0.176, 0.2944165203450751], [0.26, 0.5878700270883594], [0.507, 0.6953333613839995], [0.838, 0.754910435406097], [1.692, 0.8164699720038668], [3.484, 0.8597486084398006], [5.327, 0.8785871660148205]]});
                        
                        plot_options.series.push({name: 'only compressed (50%)', data: [[0.091, 0.3912518066062347], [0.259, 0.5652338787872462], [0.513, 0.6444069705632085], [0.856, 0.6850203522090985], [1.729, 0.7258446053984289], [3.525, 0.7479476086078891], [5.36, 0.7555744600854134]]});
                        
                        plot_options.series.push({name: 'RealSR (50%, x4)', data: [[0.091, 0.36396966556467725], [0.257, 0.5294153499046136], [0.508, 0.6189122166144536], [0.847, 0.6692433601101765], [1.708, 0.7167849456786555], [3.487, 0.7450902495376276], [5.325, 0.7546087535363025]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BD (50%, x4)', data: [[0.091, 0.366069709274633], [0.257, 0.5109185936297416], [0.508, 0.5744696512165045], [0.847, 0.6072403157627486], [1.708, 0.6367146286808258], [3.487, 0.6555568678877457], [5.325, 0.6620764035700616]]});
                        
                        plot_options.series.push({name: 'SOF-VSR-BI (50%, x4)', data: [[0.091, 0.3653267908042808], [0.257, 0.5227382075246833], [0.508, 0.59744472064463], [0.847, 0.6392342560226734], [1.708, 0.6806349479571973], [3.487, 0.7086606013459447], [5.325, 0.7200907730788157]]});
                        
                        plot_options.series.push({name: 'topaz-ahq-11 (50%, x2)', data: [[0.091, 0.444948188695434], [0.257, 0.6217864799931526], [0.508, 0.699785597982197], [0.847, 0.7291068174614805], [1.708, 0.7441370402706247], [3.487, 0.752942078067791], [5.325, 0.7578573606822441]]});
                        
                        plot_options.series.push({name: 'topaz-amq-12 (50%, x2)', data: [[0.091, 0.4729797280040851], [0.257, 0.6313531902599626], [0.508, 0.6958506528964369], [0.847, 0.7274760961991406], [1.708, 0.7524976621072159], [3.487, 0.7695787699988108], [5.325, 0.7760612054995791]]});
                        
                        plot_options.series.push({name: 'topaz-amqs-1 (50%, x2)', data: [[0.091, 0.45957379244460705], [0.257, 0.622443045549469], [0.508, 0.6911664006569445], [0.847, 0.725801211774937], [1.708, 0.7549910910459775], [3.487, 0.7742296761621584], [5.325, 0.7822339635536819]]});
                        
                        plot_options.series.push({name: 'waifu2x_anime (50%, x2)', data: [[0.091, 0.37367445330989735], [0.257, 0.5323251333756231], [0.508, 0.6126108015219011], [0.847, 0.6569651062509145], [1.708, 0.7015373007185183], [3.487, 0.7306195231341279], [5.325, 0.7415234771616143]]});
                        
                        plot_options.series.push({name: 'waifu2x_cunet (50%, x2)', data: [[0.091, 0.37534248116050073], [0.257, 0.5343041918848757], [0.508, 0.6145026630698427], [0.847, 0.6594199321262268], [1.708, 0.7049710964524404], [3.487, 0.7349188602098242], [5.325, 0.7456779056494565]]});
                        
                        plot_options.title.text = 'ERQAv1.0';
                        plot_options.subtitle.text = 'x265 + skiing';
                        plot_options.yAxis.title.text = 'ERQAv1.0';
                        plot_options.xAxis.title.text = "Bitrate (Mbps)";
                        Highcharts.chart('ERQA-x265-skiing-graph', plot_options);

                    });
                });

            
            