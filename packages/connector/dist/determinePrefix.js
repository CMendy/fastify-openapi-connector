export const determinePrefix = (instance, settings, servers) => {
    if (typeof settings?.prefix === 'string') {
        return settings.prefix;
    }
    let prefix;
    if (settings?.prefix) {
        const { urlRegex, descriptionRegex, prefixVariable } = settings.prefix;
        const server = servers?.find((server) => {
            if (urlRegex && server.url && urlRegex.test(server.url)) {
                return true;
            }
            if (descriptionRegex && server.description && descriptionRegex.test(server.description)) {
                return true;
            }
            return false;
        });
        if (server) {
            prefix = prefixVariable ? server.variables?.[prefixVariable]?.default : server.url?.split('/').pop();
        }
        if (prefix && !prefix.startsWith('/')) {
            prefix = `/${prefix}`;
        }
        if (!prefix) {
            instance.log.warn('Prefix could not be determined from servers. There will be no prefix for routes.');
        }
    }
    return prefix;
};
