import { useState } from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // Pour l'exemple, on utilise mailto. Pour un vrai envoi, il faudrait un backend ou un service type EmailJS.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:ton.email@email.com?subject=Contact%20depuis%20le%20portfolio&body=Nom:%20${form.name}%0AEmail:%20${form.email}%0AMessage:%20${form.message}`;
    setSent(true);
  };

  return (
    <section className="py-16 bg-base-200" id="contact">
      <SectionTitle title="Contactez-moi" />
      <div className="max-w-sm mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-base-100 p-8 rounded-xl shadow-lg flex flex-col gap-4 w-full max-w-md"
        >
          <input
            type="text"
            placeholder="Votre nom"
            className="input input-bordered w-full"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Votre email"
            className="input input-bordered w-full"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Votre message"
            className="textarea textarea-bordered w-full"
            required
            rows={4}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="btn btn-accent text-white font-bold"
          >
            Envoyer
          </button>
          {sent && (
            <span className="text-success text-sm mt-2">
              Merci pour votre message ! Je vous répondrai rapidement.
            </span>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;