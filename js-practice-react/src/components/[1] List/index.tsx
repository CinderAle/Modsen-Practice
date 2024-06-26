type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

const photos: Photo[] = [
    {
        albumId: 1,
        id: 1,
        title: "green",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
        albumId: 1,
        id: 2,
        title: "purple",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
];

const List = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Photos</h1>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                }}
            >
                {photos.map((photo) => (
                    <div style={{ margin: "20px" }}>
                        <img src={photo.thumbnailUrl} alt="Photo image" />
                        <h2>{photo.title}</h2>
                        <h3>Album ID: {photo.albumId}</h3>
                        <h3>ID: {photo.id}</h3>
                        <a href={photo.url}>Link</a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default List;
