export default function GoogleMap() {
  return (
    <div className="w-full h-[15%] rounded-3xl overflow-hidden border border-white/10 shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.304121381045!2d77.28206207528862!3d28.620645975671252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzE0LjMiTiA3N8KwMTcnMDQuNyJF!5e0!3m2!1sen!2sin!4v1763031468465!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
