H.init('qe9jjpg1', {
    environment: 'production',
    version: 'typerefinery.ai',
    networkRecording: {
        enabled: true,
        recordHeadersAndBody: true,
        urlBlocklist: [
            // insert urls you don't want to record here
        ],
    },
});