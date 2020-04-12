module.exports = {
    'ransomware': {
         details: {
             question: 'What is Ransomware?',
             description: 'Ransomware is a type of malware from cryptovirology that threatens to publish the victim\'s data or perpetually block access to it unless a ransom is paid. While some simple ransomware may lock the system in a way which is not difficult for a knowledgeable person to reverse, more advanced malware uses a technique called cryptoviral extortion, in which it encrypts the victim\'s files, making them inaccessible, and demands a ransom payment to decrypt them.[1][2][3][4] In a properly implemented cryptoviral extortion attack, recovering the files without the decryption key is an intractable problem – and difficult to trace digital currencies such as Ukash or Bitcoin and other cryptocurrency are used for the ransoms, making tracing and prosecuting the perpetrators difficult.',
             attacks: [
                 {
                     type: 'AlphaCrypt',
                     count: 13
                 },
                 {
                     type: 'TeslaCrypt',
                     count: 10
                 },
                 {
                     type: 'CryptoWall',
                     count: 4
                 }
             ]
         },
         gridData: {
             identitiesWithRequest: {
                 title: 'Identities with Ransonware Request',
                 identities: [
                     {
                         title: 'Public Wi-Fi',
                         request: 204,
                         icon: 'wifi'
                     },
                     {
                         title: 'Chicago',
                         request: 57,
                         icon: 'environment'
                     },
                     {
                         title: 'WN_PC_247',
                         request: 19,
                         icon: 'laptop'
                     },
                     {
                         title: 'John Doe',
                         request: 12,
                         icon: 'user'
                     },
                     {
                         title: 'Smith Laptop',
                         request: 2,
                         icon: 'laptop'
                     },
                     {
                         title: 'Public Wi-Fi-33',
                         request: 104,
                         icon: 'wifi'
                     },
                     {
                         title: 'Paris',
                         request: 72,
                         icon: 'environment'
                     },
                     {
                         title: 'WN_CC_447',
                         request: 90,
                         icon: 'laptop'
                     },
                     {
                         title: 'Bob Doe',
                         request: 1,
                         icon: 'user'
                     },
                     {
                         title: 'John Laptop',
                         request: 20,
                         icon: 'laptop'
                     },
                 ]
             },
             associatedDomain: {
                 title: 'Associated Domain Seen',
                 domains: [
                     {
                         title: 'dirsty.org',
                         request: 204,
                     },
                     {
                         title: 'frinet.com',
                         request: 57,
                         icon: 'location'
                     },
                     {
                         title: 'pricet.com',
                         request: 19,
                     },
                     {
                         title: 'tennis.org',
                         request: 12,
                     },
                     {
                         title: 'wiki.edu',
                         request: 2,
                     },
                     {
                         title: 'prinset.com',
                         request: 104,
                     },
                     {
                         title: 'cheese.org',
                         request: 72,
                     },
                     {
                         title: 'fintech.com',
                         request: 90,
                     },
                     {
                         title: 'football.com',
                         request: 1,
                     },
                     {
                         title: 'print.edu',
                         request: 20,
                     },
                 ]
             }
         },
         chartData: {
             totalRequests: 312,
             percentage: '13%',
             icon: 'up',
             data: [
                 {
                     name: 'Jul 1', value: 25,
                 },
                 {
                     name: 'Jul 2', value: 25,
                 },
                 {
                     name: 'Jul 3', value: 38,
                 },
                 {
                     name: 'Jul 4', value: 35,
                 },
                 {
                     name: 'Jul 5', value: 20,
                 },
                 {
                     name: 'Jul 6', value: 42,
                 },
                 {
                     name: 'Jul 7', value: 50,
                 },
             ]
         }
    }
};