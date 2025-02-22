export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        body: JSON.stringify({
          school: formData.get('school'),
          email: formData.get('email'),
          message: formData.get('message')
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (data.status === 'success') {
        alert('Zpráva byla úspěšně odeslána!');
        e.currentTarget.reset();
      } else {
        alert('Došlo k chybě při odesílání zprávy. Prosím zkuste to znovu.');
      }
    } catch (error) {
      alert('Došlo k chybě při odesílání zprávy. Prosím zkuste to znovu.');
    }
  };

  return (
    <div>
      <div className="relative w-full h-screen mt-24" id="kontakt">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/header_image.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex items-top justify-center h-full">
          <div className="text-center text-cerna mt-32">
            <h2 className="text-3xl lg:text-5xl font-bold mx-8">
              Chcete se dozvědět více?
            </h2>
            <p className="mt-4 w-[70%] mx-auto text-md lg:text-xl">
              Předvedeme vám, co všechno umíme, a společně zvolíme takovou
              variantu systému, která vaší škole bude perfektně vyhovovat.
            </p>
            
            <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-4 w-[90%] max-w-[500px] mx-auto bg-white p-8 rounded-3xl shadow-lg">
              <input
                name="school"
                type="text"
                placeholder="Název školy"
                className="px-6 py-3 rounded-full border border-modra focus:outline-none focus:ring-2 focus:ring-modra"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                className="px-6 py-3 rounded-full border border-modra focus:outline-none focus:ring-2 focus:ring-modra"
                required
              />
              <textarea
                name="message"
                placeholder="Vaše zpráva"
                rows={4}
                className="px-6 py-3 rounded-3xl border border-modra focus:outline-none focus:ring-2 focus:ring-modra resize-none"
                required
              />
              <button 
                type="submit"
                className="mt-2 px-8 py-3 bg-modra text-white font-semibold rounded-full flex items-center justify-center gap-4 mx-auto w-fit hover:bg-opacity-90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" fill="none" className="h-8 w-8">
                  <path d="M42.1666 11.5001C42.1666 9.39175 40.4416 7.66675 38.3333 7.66675H7.66659C5.55825 7.66675 3.83325 9.39175 3.83325 11.5001V34.5001C3.83325 36.6084 5.55825 38.3334 7.66659 38.3334H38.3333C40.4416 38.3334 42.1666 36.6084 42.1666 34.5001V11.5001ZM38.3333 11.5001L22.9999 21.0834L7.66659 11.5001H38.3333ZM38.3333 34.5001H7.66659V15.3334L22.9999 24.9167L38.3333 15.3334V34.5001Z" fill="white"/>
                </svg>
                <span className="text-md lg:text-xl font-semibold">Odeslat zprávu</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white text-modra text-center py-2">
        <p className="text-sm">© 2025 <a href="https://ondrejkrejci.com" className="hover:underline">Ondřej Krejčí</a> & Adam Havlík</p>
      </div>
    </div>
  );
}
