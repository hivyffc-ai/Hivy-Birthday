'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { Calendar, Phone, User, Users, Gift, MessageCircle, X, Send, Loader2, CheckCircle, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { siteConfig, getVisiblePackages, packages } from '@/lib/ffc-config';

// localStorage key for form data persistence
const FORM_STORAGE_KEY = 'hivy_booking_form_data';

// Form validation schema
const ffcBookingSchema = z.object({
  yourName: z.string().min(2, 'Name must be at least 2 characters'),
  partnerName: z.string().min(2, 'Partner name must be at least 2 characters'),
  phone: z.string().min(10, 'Enter valid 10-digit phone number').max(10, 'Enter valid 10-digit phone number').regex(/^[6-9]\d{9}$/, 'Enter valid Indian mobile number'),
  city: z.string().min(1, 'Please enter your city'),
  occasionDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select preferred time'),
  occasion: z.string().min(1, 'Please select your moment'),
  selectedPackage: z.string().optional(),
});

type FFCBookingFormData = z.infer<typeof ffcBookingSchema>;

// Moment/Occasion options
const momentOptions = [
  { value: 'birthday', label: 'Birthday Celebration' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'proposal', label: 'Proposal / Ring Ceremony' },
  { value: 'candlelight-dinner', label: 'Candlelight Dinner' },
  { value: 'surprise', label: 'Surprise Date' },
  { value: 'pre-wedding-shoot', label: 'Pre-Wedding Shoot' },
  { value: 'baby-moments', label: 'Baby Moments (Pregnancy Announcement)' },
  { value: 'other', label: 'Other Special Occasion' },
];

// Time slots
const timeSlots = [
  { value: 'lunch-12-3', label: '12 PM to 3 PM (Lunch - Indoor)' },
  { value: 'lunch-1-4', label: '1 PM to 4 PM (Lunch - Indoor)' },
  { value: 'lunch-2-5', label: '2 PM to 5 PM (Lunch - Indoor)' },
  { value: 'evening-4-7', label: '4 PM to 7 PM (Evening - Indoor)' },
  { value: 'evening-5-8', label: '5 PM to 8 PM (Evening - Indoor)' },
  { value: 'evening-6-9', label: '6 PM to 9 PM (Evening - Indoor)' },
  { value: 'dinner-7-10', label: '7 PM to 10 PM (Dinner - Indoor/Private)' },
  { value: 'dinner-730-1030', label: '7:30 PM to 10:30 PM (Dinner - Indoor/Private)' },
  { value: 'dinner-8-11', label: '8 PM to 11 PM (Dinner - Indoor/Private)' },
];

interface FFCBookingFormProps {
  pageTitle?: string;
  variant?: 'default' | 'hero' | 'sidebar' | 'modal';
  packageName?: string;
  defaultPackageSlug?: string;
  onClose?: () => void;
}

// Helper function to save form data to localStorage
const saveFormData = (data: Partial<FFCBookingFormData>) => {
  if (typeof window !== 'undefined') {
    const existingData = getStoredFormData();
    const newData = { ...existingData, ...data };
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(newData));
  }
};

// Helper function to get stored form data
const getStoredFormData = (): Partial<FFCBookingFormData> => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem(FORM_STORAGE_KEY);
    if (storedData) {
      try {
        return JSON.parse(storedData);
      } catch {
        return {};
      }
    }
  }
  return {};
};

// Helper function to clear form data from localStorage
const clearFormData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(FORM_STORAGE_KEY);
  }
};

export function FFCBookingForm({ pageTitle, variant = 'default', packageName, defaultPackageSlug, onClose }: FFCBookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Get stored form data on mount
  const storedData = typeof window !== 'undefined' ? getStoredFormData() : {};
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FFCBookingFormData>({
    resolver: zodResolver(ffcBookingSchema),
    defaultValues: {
      yourName: storedData.yourName || '',
      partnerName: storedData.partnerName || '',
      phone: storedData.phone || '',
      city: storedData.city || 'Surat',
      occasionDate: storedData.occasionDate || '',
      preferredTime: storedData.preferredTime || '',
      occasion: storedData.occasion || '',
      selectedPackage: defaultPackageSlug || storedData.selectedPackage || ''
    }
  });

  // Watch form values and save to localStorage on change
  const watchedValues = watch();
  
  useEffect(() => {
    // Save form data to localStorage whenever values change
    const subscription = watch((value) => {
      saveFormData(value as Partial<FFCBookingFormData>);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // Restore form data from localStorage on mount
  useEffect(() => {
    const stored = getStoredFormData();
    if (stored.yourName) setValue('yourName', stored.yourName);
    if (stored.partnerName) setValue('partnerName', stored.partnerName);
    if (stored.phone) setValue('phone', stored.phone);
    if (stored.city) setValue('city', stored.city);
    if (stored.occasionDate) setValue('occasionDate', stored.occasionDate);
    if (stored.preferredTime) setValue('preferredTime', stored.preferredTime);
    if (stored.occasion) setValue('occasion', stored.occasion);
    if (!defaultPackageSlug && stored.selectedPackage) setValue('selectedPackage', stored.selectedPackage);
  }, [setValue, defaultPackageSlug]);

  // Generate WhatsApp message
  const generateWhatsAppMessage = (data: FFCBookingFormData): string => {
    const occasionLabel = momentOptions.find(o => o.value === data.occasion)?.label || data.occasion;
    const timeLabel = timeSlots.find(t => t.value === data.preferredTime)?.label || data.preferredTime;
    const selectedPkg = data.selectedPackage ? packages.find(p => p.slug === data.selectedPackage) : null;
    
    let message = `*New Booking Inquiry - HIVY - Place for Celebrations*\n\n`;
    message += `*Your Name:* ${data.yourName}\n`;
    message += `*Partner's Name:* ${data.partnerName}\n`;
    message += `*Phone:* ${data.phone}\n`;
    message += `*City:* ${data.city}\n`;
    message += `*Date:* ${data.occasionDate}\n`;
    message += `*Preferred Time:* ${timeLabel}\n`;
    message += `*Occasion:* ${occasionLabel}\n`;
    
    if (selectedPkg) {
      message += `\n*Selected Package:* ${selectedPkg.name} (Rs.${selectedPkg.price.toLocaleString('en-IN')})\n`;
    } else if (packageName) {
      message += `\n*Package:* ${packageName}\n`;
    }
    
    if (pageTitle) {
      message += `\n*Interested In:* ${pageTitle}\n`;
    }
    
    message += `\nLooking forward to creating beautiful memories!`;
    
    return encodeURIComponent(message);
  };

  const onSubmit = async (data: FFCBookingFormData) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const whatsappMessage = generateWhatsAppMessage(data);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');

    fetch('https://crm.bookmymoment.in/api/leads/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        occasion_type: data.occasion,
        preferred_date: data.occasionDate,
        outlet: siteConfig.city,
        lead_source: window.location.hostname,
        source_domain: window.location.hostname,
        enquiry_channel: 'form',
        notes: data.selectedPackage
          ? `Package: ${packages.find((p) => p.slug === data.selectedPackage)?.name || data.selectedPackage}`
          : undefined,
      }),
    }).catch(() => {});

    setIsSubmitting(false);
    setIsSuccess(true);

    // Clear localStorage after successful submission
    clearFormData();
    
    setTimeout(() => {
      setIsSuccess(false);
      reset();
      if (onClose) onClose();
    }, 3000);
  };

  const today = new Date().toISOString().split('T')[0];

  if (isSuccess) {
    return (
      <Card className={`${variant === 'modal' ? '' : 'shadow-lg'}`}>
        <CardContent className="py-12 text-center">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-rose-100">
            <CheckCircle className="h-8 w-8 text-rose-700" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Booking Request Sent!</h3>
          <p className="text-muted-foreground">
            We've opened WhatsApp for you. Complete your booking there!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${variant === 'modal' ? 'border-0 shadow-none' : 'shadow-lg'} ${variant === 'hero' ? 'bg-white/60 backdrop-blur-md border-white/20' : ''} overflow-hidden`}>
      {variant !== 'modal' && (
        <div className={`${variant === 'hero' ? 'bg-gradient-to-r from-rose-700/95 to-rose-600/95' : 'bg-gradient-to-r from-rose-700 to-rose-600'} p-4 text-white`}>
          <CardTitle className="text-xl flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Reserve Your Moment
          </CardTitle>
          <CardDescription className="text-white/80 mt-1">
            Fill in details & we'll contact you on WhatsApp
          </CardDescription>
        </div>
      )}
      
      {variant === 'modal' && onClose && (
        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <CardTitle className="text-xl text-rose-700">Reserve Now</CardTitle>
            <CardDescription>Get instant confirmation on WhatsApp</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Your Name Field */}
          <div className="space-y-2">
            <Label htmlFor="yourName" className="flex items-center gap-2">
              <User className="h-4 w-4 text-rose-700" />
              Your Name *
            </Label>
            <Input
              id="yourName"
              placeholder="Enter your name"
              {...register('yourName')}
              className={errors.yourName ? 'border-red-500' : ''}
            />
            {errors.yourName && (
              <p className="text-red-500 text-sm">{errors.yourName.message}</p>
            )}
          </div>

          {/* Partner's Name Field */}
          <div className="space-y-2">
            <Label htmlFor="partnerName" className="flex items-center gap-2">
              <Users className="h-4 w-4 text-rose-700" />
              Your Partner's Name *
            </Label>
            <Input
              id="partnerName"
              placeholder="Enter your partner's name"
              {...register('partnerName')}
              className={errors.partnerName ? 'border-red-500' : ''}
            />
            {errors.partnerName && (
              <p className="text-red-500 text-sm">{errors.partnerName.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-rose-700" />
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="10-digit mobile number"
              maxLength={10}
              {...register('phone')}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* City Field */}
          <div className="space-y-2">
            <Label htmlFor="city" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-rose-700" />
              City *
            </Label>
            <Input
              id="city"
              placeholder="Enter your city"
              {...register('city')}
              className={errors.city ? 'border-red-500' : ''}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          {/* Package Selection Field with View Details */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Gift className="h-4 w-4 text-rose-700" />
              Select Package
            </Label>
            <Select 
              defaultValue={defaultPackageSlug || storedData.selectedPackage}
              onValueChange={(value) => setValue('selectedPackage', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select package" />
              </SelectTrigger>
              <SelectContent className="max-w-[90vw] sm:max-w-none">
                {getVisiblePackages().map((pkg) => (
                  <SelectItem key={pkg.slug} value={pkg.slug} className="py-2">
                    <div className="flex items-center justify-between gap-2 w-full">
                      <span className="truncate text-sm sm:text-base">{pkg.emoji} {pkg.name} - ₹{pkg.price.toLocaleString('en-IN')}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* View Details Button - shows when package is selected */}
            {watchedValues.selectedPackage && (
              <Link 
                href={`/packages/${watchedValues.selectedPackage}`}
                target="_blank"
                className="inline-flex items-center gap-1 text-xs text-rose-700 hover:text-rose-900 mt-1 ml-auto float-right bg-rose-50 px-2 py-1 rounded-full border border-rose-200 hover:bg-rose-100 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                View Details
              </Link>
            )}
          </div>

          {/* Occasion Field */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Gift className="h-4 w-4 text-rose-700" />
              Your Moment *
            </Label>
            <Select 
              defaultValue={storedData.occasion}
              onValueChange={(value) => setValue('occasion', value)}
            >
              <SelectTrigger className={`w-full ${errors.occasion ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Select moment" />
              </SelectTrigger>
              <SelectContent>
                {momentOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.occasion && (
              <p className="text-red-500 text-sm">{errors.occasion.message}</p>
            )}
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Date Field */}
            <div className="space-y-2">
              <Label htmlFor="occasionDate" className="flex items-center gap-2 text-sm font-medium">
                <Calendar className="h-4 w-4 text-rose-700" />
                Select Date *
              </Label>
              <Input
                id="occasionDate"
                type="date"
                min={today}
                {...register('occasionDate')}
                className={`w-full ${errors.occasionDate ? 'border-red-500' : ''}`}
              />
              {errors.occasionDate && (
                <p className="text-red-500 text-sm">{errors.occasionDate.message}</p>
              )}
            </div>

            {/* Time Slot Field */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4 text-rose-700" />
                Preferred Time *
              </Label>
              <Select 
                defaultValue={storedData.preferredTime}
                onValueChange={(value) => setValue('preferredTime', value)}
              >
                <SelectTrigger className={`w-full ${errors.preferredTime ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot.value} value={slot.value}>
                      {slot.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.preferredTime && (
                <p className="text-red-500 text-sm">{errors.preferredTime.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-800 hover:to-rose-700 text-white py-5 text-base font-semibold mt-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <MessageCircle className="h-5 w-5 mr-2" />
                Lock Your Date - Message on WhatsApp
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

// WhatsApp Floating Button with Form Modal
export function FFCWhatsAppFloat({ pageTitle }: { pageTitle?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Pre-written WhatsApp message (using WhatsApp bold formatting with *text*)
  const preWrittenMessage = encodeURIComponent(
    `*Hi HIVY!*\n\nI'm interested in booking a romantic celebration at your venue.\n\n*I'd like to know more about:*\n- Candlelight dinner packages\n- Birthday surprise setups\n- Anniversary celebration options\n- Available dates & pricing\n\nPlease share the details. Thank you!`
  );

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${preWrittenMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 group"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us
          </span>
        </a>
      </div>
    </>
  );
}

// Book Now Button with Modal
export function FFCBookNowButton({ pageTitle, packageName, packageSlug, className }: { pageTitle?: string; packageName?: string; packageSlug?: string; className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={`bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-800 hover:to-rose-700 text-white ${className}`}>
          <Gift className="h-5 w-5 mr-2" />
          Book Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md p-0">
        <FFCBookingForm 
          variant="modal" 
          pageTitle={pageTitle} 
          packageName={packageName}
          defaultPackageSlug={packageSlug}
          onClose={() => setIsOpen(false)} 
        />
      </DialogContent>
    </Dialog>
  );
}
