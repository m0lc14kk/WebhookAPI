class EmbedServer {
    private embedTitle: string | null;
    private embedDescription: string | null;
    private embedColor: number;

    public setTitle(text: string | null): EmbedServer {
        this.embedTitle = text;
        return this;
    };

    public setDescription(text: string | null): EmbedServer {
        this.embedDescription = text;
        return this;
    };

    public setColor(color: number): EmbedServer {
        this.embedColor = color;
        return this;
    };

    public getEmbed() {
        return {
            color: this.embedColor,

            title: this.embedTitle,
            description: this.embedDescription,
        };
    };
};

export { EmbedServer };