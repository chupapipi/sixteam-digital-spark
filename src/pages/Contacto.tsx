
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    pais: '+57',
    email: '',
    empresa: '',
    mensaje: ''
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573004567890?text=Hola%2C%20estoy%20listo%20para%20empezar%20la%20transformación%20digital%20de%20mi%20negocio', '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.telefono || !formData.email || !formData.empresa) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    // Simular envío del formulario
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo muy pronto.",
    });

    // Limpiar formulario
    setFormData({
      nombre: '',
      telefono: '',
      pais: '+57',
      email: '',
      empresa: '',
      mensaje: ''
    });
  };

  const paises = [
    { code: '+57', name: 'Colombia' },
    { code: '+52', name: 'México' },
    { code: '+1', name: 'Estados Unidos' },
    { code: '+54', name: 'Argentina' },
    { code: '+56', name: 'Chile' },
    { code: '+51', name: 'Perú' },
    { code: '+593', name: 'Ecuador' },
    { code: '+58', name: 'Venezuela' },
    { code: '+34', name: 'España' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para empezar la transformación digital de tu negocio?
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Conversemos sobre cómo podemos impulsar el crecimiento de tu empresa
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white text-lg px-8 py-4 h-auto"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Chatea con nosotros en WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Información de Contacto y Formulario */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Información de Contacto */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-sixteam-navy mb-8">
                Información de Contacto
              </h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-sixteam-teal">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MessageCircle className="w-6 h-6 text-sixteam-teal mt-1" />
                      <div>
                        <h3 className="font-semibold text-sixteam-navy mb-1">WhatsApp</h3>
                        <p className="text-gray-600">+57 300 456 7890</p>
                        <p className="text-sm text-gray-500">Respuesta inmediata</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-sixteam-blue">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-sixteam-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-sixteam-navy mb-1">Email</h3>
                        <p className="text-gray-600">alpha@sixteam.pro</p>
                        <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-sixteam-navy">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-sixteam-navy mt-1" />
                      <div>
                        <h3 className="font-semibold text-sixteam-navy mb-1">Ubicación</h3>
                        <p className="text-gray-600">Colombia</p>
                        <p className="text-sm text-gray-500">Atendemos toda Latinoamérica</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Horarios de Atención */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-sixteam-navy mb-4">Horarios de Atención</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>WhatsApp:</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-sixteam-navy mb-2">
                    Formulario de Contacto
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Completa el formulario y nos pondremos en contacto contigo muy pronto
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="nombre">Nombre completo *</Label>
                        <Input
                          id="nombre"
                          type="text"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange('nombre', e.target.value)}
                          placeholder="Tu nombre completo"
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="empresa">Empresa *</Label>
                        <Input
                          id="empresa"
                          type="text"
                          value={formData.empresa}
                          onChange={(e) => handleInputChange('empresa', e.target.value)}
                          placeholder="Nombre de tu empresa"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="pais">País</Label>
                        <Select value={formData.pais} onValueChange={(value) => handleInputChange('pais', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {paises.map((pais) => (
                              <SelectItem key={pais.code} value={pais.code}>
                                {pais.code} {pais.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-2">
                        <Label htmlFor="telefono">Número de teléfono *</Label>
                        <Input
                          id="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange('telefono', e.target.value)}
                          placeholder="300 123 4567"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Correo electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@empresa.com"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange('mensaje', e.target.value)}
                        placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit"
                        className="bg-sixteam-blue hover:bg-sixteam-blue/90 text-white flex-1"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </Button>
                      
                      <Button 
                        type="button"
                        onClick={handleWhatsAppClick}
                        className="bg-sixteam-teal hover:bg-sixteam-teal/90 text-white flex-1"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Mejor por WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sixteam-navy mb-12 text-center">
              Preguntas Frecuentes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-sixteam-navy mb-3">
                    ¿Cuánto tiempo toma un proyecto?
                  </h3>
                  <p className="text-gray-600">
                    Depende del alcance, pero típicamente entre 2-6 meses desde el análisis hasta la implementación completa.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-sixteam-navy mb-3">
                    ¿Ofrecen soporte post-implementación?
                  </h3>
                  <p className="text-gray-600">
                    Sí, incluimos soporte continuo, actualizaciones y capacitación como parte integral de nuestros servicios.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-sixteam-navy mb-3">
                    ¿Trabajan con empresas de todos los tamaños?
                  </h3>
                  <p className="text-gray-600">
                    Sí, adaptamos nuestras soluciones desde startups hasta grandes corporaciones en diversos sectores.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-sixteam-navy mb-3">
                    ¿Cómo garantizan los resultados?
                  </h3>
                  <p className="text-gray-600">
                    Establecemos métricas claras desde el inicio y monitoreamos el progreso continuamente para asegurar el ROI.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
