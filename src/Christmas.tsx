const Christmas: React.FC = () => {
  const getChristmasMessage = (): string => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    if (month === 12) {
      if (day === 24) {
        console.log("FELIZ NAVIDAD!!");
        return "🎄 FELIZ NAVIDAD!! 🎅";
      } else if (day < 24) {
        console.log("Feliz víspera de Navidad");
        return "✨ Feliz víspera de Navidad ✨";
      } else {
        console.log("¿Qué tal tus navidades?");
        return "🎁 ¿Qué tal tus navidades? 🎉";
      }
    }

    return "No es diciembre, pero siempre puedes tener espíritu navideño 🎄";
  };

  return (
    <div className="message">
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Z1cDFhdjZlZHY4NTEzOXVkeThwaHF1amRzN2s5dDloZ256a2JhdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDaryAMLjvAyN4eiY/giphy.webp"
        alt="Santa bailando"
        style={{ width: "300px", marginBottom: "20px" }}
      />
      <h1>{getChristmasMessage()}</h1>
    </div>
  );
};

export default Christmas;
