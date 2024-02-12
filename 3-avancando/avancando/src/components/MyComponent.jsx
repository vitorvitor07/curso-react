import image from "../assets/images/maxresdefault.jpg";

const MyComponent = () => {
  return (
    <div>
      <h1>Seção 3</h1>
      <h3>Arquivos státicos</h3>
      <div>
        <p>Usando a pasta public</p>
        {/* Em public */}
        <img src="./maxresdefault.jpg" alt="wallpaper-alien" width="80%" />
      </div>
      <div className="mt-3">
        {/* Em assets */}
        <p>Usando a pasta assets</p>
        <img src={image} alt="wallpaper-alien" width="80%" />
      </div>
    </div>
  );
};

export default MyComponent;
