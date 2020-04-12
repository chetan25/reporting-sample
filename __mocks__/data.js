export const data = {
        details: {
            question: 'What is Ransomware?',
            description: 'Ransomware is a type of malware from cryptovirology that threatens.',
            attacks: [
                {
                    type: 'AlphaCrypt',
                    count: 13
                },
                {
                    type: 'TeslaCrypt',
                    count: 10
                },
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
};