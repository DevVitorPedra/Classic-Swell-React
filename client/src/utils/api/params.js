/**
 * clodCover total coverage in percent
 * seaLevel relative to MSL
 * swell direction 0 indicates coming form north
 * swellPeriod in seconds 
 * waterTemp in degrees celsius
 * waveHeight in meters
 * wavePeriod is wind and waves combined in seconds
 * wind direction 0 is coming from north
 * wind speed in meters per second
 *  */
export const mainParams = ['cloudCover', 'seaLevel', 'swellDirection', 'swellHeight', 'swellPeriod', 'waterTemperature', 'waveDirection', 'wavePeriod', 'windDirection', 'windSpeed']


export const beaches = {
    praiaBarra: {
        name:'Praia da Barra da Lagoa',
        lat: -27.574,
        lng: -48.4234
    },
    praiaMole: {
        name:'Praia Mole',
        lat: -27.6025,
        lng: -48.4361
    },
    praiaJoaquina: {
        name:'Praia da Joaquina',
        lat: -27.629,
        lng: -48.4488
    },
    praiaRififi: {
        name:'Praia do Rififi',
        lat: -27.644165692711454,
        lng: -48.461709755745936
    },
   
    praiaDoCampeche: {
        name:'Praia do Campeche',
        lat: -27.6898,
        lng: -48.4816
    },
    praiaMorroDasPedras: {
        name:'Praia do Morro das Pedras',
        lat: -276917,
        lng: -48.4821
    },
    praiaDoCaldeirao: {
        name:'Praia do Caldeirão',
        lat: -27.644165692711454,
        lng: -48.461709755745936
    },
    praiaDaArmação: {
        name:'Praia da Armação',
        lat: -27.74405970175009,
        lng: -48.50712763801079
    },
    praiaDoMatadeiro: {
        name:'Praia do Matadeiro',
        lat: -27.754075056229542,
        lng: -48.4972541723044

    },
    praiaLagoinhaDoLeste: {
        name:'Praia da Lagoinha do Leste',
        lat: -27.7731800829555,
        lng: -48.48529191585539
    },
    praiaDosAçores: {
        name:'Praia dos Açores',
        lat: -27.783988620771307,
        lng: -48.52298947846258
    },

    
    praiaNaufragados: {
        name:'Praia de Naufragados',
        lat: -27.834486360305473,
        lng: -48.564101752855265
    }
}