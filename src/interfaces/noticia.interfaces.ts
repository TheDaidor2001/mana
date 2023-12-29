// Generated by https://quicktype.io

export interface Noticias {
    data: Noticia[];
    meta: Meta;
}

export interface Noticia {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    titulo:      string;
    subtitulo:   string;
    contenido:   string;
    slug:        string;
    filtros:     string;
    fecha:       string;
    createdAt:   string;
    updatedAt:   string;
    publishedAt: string;
    locale:      string;
    image:       Image;
}

export interface Image {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: ProviderMetadata;
    createdAt:         string;
    updatedAt:         string;
}

export interface Formats {
    small:     Medium;
    medium:    Medium;
    thumbnail: Medium;
}

export interface Medium {
    ext:               string;
    url:               string;
    hash:              string;
    mime:              string;
    name:              string;
    path:              null;
    size:              number;
    width:             number;
    height:            number;
    provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
    public_id:     string;
    resource_type: ResourceType;
}

export enum ResourceType {
    Image = "image",
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}