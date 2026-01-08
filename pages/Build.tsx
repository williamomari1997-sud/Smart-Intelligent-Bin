
import React from 'react';
import Layout from '../components/Layout';

const Build: React.FC = () => {
  return (
    <Layout title="DIY Bin Sensor" showBack>
      <div className="px-4 py-4 space-y-8">
        {/* Progress */}
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Assembly Progress</span>
          <span className="text-xs font-medium opacity-60">Step 2 of 5</span>
        </div>
        <div className="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-neon-green shadow-[0_0_10px_#3ef61e] rounded-full" style={{ width: '40%' }}></div>
        </div>

        {/* Intro */}
        <section>
          <h1 className="text-3xl font-black leading-tight mb-3">Hardware Assembly</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Turn any standard trash bin into a smart device. Wire the ultrasonic sensor to the ESP32 to measure fill levels in real-time.
          </p>
        </section>

        {/* Parts List */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold flex justify-between items-center">
            Required Parts
            <span className="text-[10px] font-bold py-1 px-2 rounded bg-primary/10 text-primary">3 ITEMS</span>
          </h3>
          <div className="space-y-3">
            {[
              { name: 'Ultrasonic Sensor', model: 'HC-SR04', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1pccc4WVvaMRqxfp1dvjfov0wR5QvnIH2yp6KhD_MEdI3H2swsNYeqT8hmS-kfGiH2nDOrzb9Wvg9VU4mnUK7bpnvn6L3oX48UDYk1JWjotl70oWgXsxCh1TSHVPEkPlnjKlMVVIdwk94svlCNnABfxbclYOr3EI88AviscW4eh7HGeoX15Z73ljU5G7xy5BAbnB-WRd_RLu7TFL8EQHqQJo66mqbLV9kOXfcz0FHbVFebitpm0WDoKNsWZjMsOEDa89MwWRZCgNC' },
              { name: 'ESP32 DevKit', model: 'Wi-Fi + BT Enabled', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_1EYkq0mR1q6p-m3hOkL2l1m8NoriDmV0_QiayT-maZy3Fk7nzCqsks5ujdxlTK1lHVqMngsznG3tJhUdoBa_BzgILS088qqXAWveANxmetTiF9VQ4m4GRPYbcMaj2oy8g0BXfJgQhn-xaiMy7gpx37lr3YauwoCceSluuSk1tLcGBhcezX5NenjeODYrEZwnB9Noo_p-tKrmU9_oCWEWmPNp8bqqZ2vfTITry7waS0oiM-hvbIsnNVmJOHtwugOYgIVdr8Z2B6So' },
              { name: 'Li-Po Battery', model: '3.7V 1200mAh', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh3LVOIHuoBGotDkvogkQf343M8bQkAwhRbtldReDyrekrbfYRA7uIXc1SFnv-1OlgJmk2vW4xgYSFS975ytUH6DCYRCZh-47Mt856MEG9K4y_UmwbS4lk5YNCSf0uobZh6d_paoVRLIHoMMPO49UrnenlhZv3gSmFUE6I88p3jeMjeffui86pk94CCKr-LxMdnG3opEi-2xyfwFnQBSXbKZj1td-l4nYeFxOp1CtFdS86ElUWapvLQ4ydrz3Y4QnTgP1hVKeeocV6' }
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-4 bg-white dark:bg-surface-dark p-3 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
                <div className="bg-slate-100 dark:bg-white/10 rounded-lg size-16 flex items-center justify-center overflow-hidden shrink-0">
                  <img className="object-cover size-full" src={p.img} alt={p.name} />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="font-bold text-sm">{p.name}</p>
                  <p className="text-xs opacity-60">{p.model}</p>
                </div>
                <button className="bg-primary/20 text-primary text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider">Buy</button>
              </div>
            ))}
          </div>
        </section>

        {/* Diagram */}
        <section className="bg-slate-900 rounded-3xl overflow-hidden border border-white/10">
          <div className="p-4 border-b border-white/5 flex justify-between items-center">
            <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Wiring Diagram</span>
            <span className="material-symbols-outlined text-white/50 text-xl">zoom_in</span>
          </div>
          <div className="relative h-64 bg-slate-950 flex flex-col items-center justify-center p-8 gap-4">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #3ef61e 1px, transparent 0)`, backgroundSize: '24px 24px' }}></div>
            <div className="z-10 w-full h-32 border-2 border-dashed border-primary/30 rounded-2xl flex items-center justify-center text-center p-4">
              <span className="material-symbols-outlined text-primary text-5xl opacity-40 absolute">settings_input_component</span>
              <div className="font-mono text-[10px] text-white/80 space-y-1">
                <p>ESP32_GPIO_12 -&gt; SENSOR_TRIG</p>
                <p>ESP32_GPIO_13 -&gt; SENSOR_ECHO</p>
                <p>ESP32_3.3V -&gt; SENSOR_VCC</p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="space-y-6 pb-20">
          {[
            { num: '01', title: 'Wire the Sensor', desc: 'Connect the VCC to 3.3V, GND to GND, and Echo/Trig to the GPIO pins specified above.', done: true },
            { num: '02', title: 'Power Supply', desc: 'Plug your Li-Po battery into the JST connector. Ensure correct polarity!', done: false, active: true },
            { num: '03', title: 'Flash Firmware', desc: 'Connect to your PC and upload the sensor code using ESPHome.', done: false }
          ].map((s, idx) => (
            <div key={idx} className={`relative pl-12 ${!s.done && !s.active ? 'opacity-40' : ''}`}>
              <div className="absolute left-0 top-0 text-4xl font-black italic text-transparent stroke-primary" style={{ WebkitTextStroke: '1px #3ef61e' }}>{s.num}</div>
              <div className={`p-5 rounded-2xl border-2 ${s.active ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' : 'border-slate-200 dark:border-white/5 bg-white dark:bg-surface-dark'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg">{s.title}</h4>
                  {s.active && <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded">ACTIVE</span>}
                </div>
                <p className="text-sm opacity-70 leading-relaxed mb-4">{s.desc}</p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={s.done} className="size-5 rounded border-slate-300 text-primary focus:ring-primary bg-transparent" readOnly />
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${s.done ? 'text-primary' : 'opacity-40'}`}>
                    {s.done ? 'Completed' : 'Mark as Done'}
                  </span>
                </label>
              </div>
            </div>
          ))}
        </section>

        {/* Sticky Action */}
        <div className="fixed bottom-32 left-1/2 -translate-x-1/2 w-full max-w-md px-4">
          <button className="w-full bg-neon-green hover:brightness-110 text-slate-900 font-black py-4 rounded-2xl shadow-xl shadow-neon-green/30 flex items-center justify-center gap-2 transition-all active:scale-95">
            <span>TEST CONNECTION</span>
            <span className="material-symbols-outlined font-bold">sensors</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Build;
