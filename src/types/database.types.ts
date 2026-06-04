// Auto-generate this file with: npx supabase gen types typescript --project-id <id> > src/types/database.types.ts
// This stub is manually maintained until the migration is applied.

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      ads_banners: {
        Row: {
          id: string
          title: string
          image_url: string
          link_url: string | null
          is_active: boolean
          sort_order: number
          starts_at: string | null
          ends_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          image_url: string
          link_url?: string | null
          is_active?: boolean
          sort_order?: number
          starts_at?: string | null
          ends_at?: string | null
          created_at?: string
        }
        Update: {
          title?: string
          image_url?: string
          link_url?: string | null
          is_active?: boolean
          sort_order?: number
          starts_at?: string | null
          ends_at?: string | null
        }
        Relationships: []
      }
      announcements: {
        Row: {
          id: string
          title: string
          body: string
          is_active: boolean
          created_at: string
          expires_at: string | null
        }
        Insert: {
          id?: string
          title: string
          body: string
          is_active?: boolean
          created_at?: string
          expires_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          body?: string
          is_active?: boolean
          expires_at?: string | null
        }
        Relationships: []
      }
      cities: {
        Row: {
          id: number
          name: string
          slug: string
          province: string | null
          is_active: boolean
        }
        Insert: {
          id?: number
          name: string
          slug: string
          province?: string | null
          is_active?: boolean
        }
        Update: {
          id?: number
          name?: string
          slug?: string
          province?: string | null
          is_active?: boolean
        }
        Relationships: []
      }
      dealers: {
        Row: {
          id: string
          user_id: string
          business_name: string
          slug: string
          city_id: number | null
          about_text: string | null
          logo_url: string | null
          cover_url: string | null
          theme: string
          contact_phone: string | null
          contact_email: string | null
          contact_whatsapp: string | null
          address: string | null
          is_verified: boolean
          is_suspended: boolean
          onboarding_completed: boolean
          subscription_expires_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          business_name: string
          slug: string
          city_id?: number | null
          about_text?: string | null
          logo_url?: string | null
          cover_url?: string | null
          theme?: string
          contact_phone?: string | null
          contact_email?: string | null
          contact_whatsapp?: string | null
          address?: string | null
          is_verified?: boolean
          is_suspended?: boolean
          onboarding_completed?: boolean
          subscription_expires_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          business_name?: string
          slug?: string
          city_id?: number | null
          about_text?: string | null
          logo_url?: string | null
          cover_url?: string | null
          theme?: string
          contact_phone?: string | null
          contact_email?: string | null
          contact_whatsapp?: string | null
          address?: string | null
          is_verified?: boolean
          is_suspended?: boolean
          onboarding_completed?: boolean
          subscription_expires_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'dealers_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'dealers_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      hot_sale_cards: {
        Row: {
          id: string
          dealer_id: string
          type: Database['public']['Enums']['hot_sale_card_type']
          title: string
          description: string | null
          city: string
          society: string | null
          asking_price: number
          images: Json
          scope: Database['public']['Enums']['hot_sale_card_scope']
          target_cities: string[] | null
          duration_hours: number
          expires_at: string
          status: Database['public']['Enums']['hot_sale_card_status']
          accepted_offer_id: string | null
          published_at: string
          created_at: string
        }
        Insert: {
          id?: string
          dealer_id: string
          type: Database['public']['Enums']['hot_sale_card_type']
          title: string
          description?: string | null
          city: string
          society?: string | null
          asking_price: number
          images?: Json
          scope?: Database['public']['Enums']['hot_sale_card_scope']
          target_cities?: string[] | null
          duration_hours: number
          expires_at: string
          status?: Database['public']['Enums']['hot_sale_card_status']
          accepted_offer_id?: string | null
          published_at?: string
          created_at?: string
        }
        Update: {
          type?: Database['public']['Enums']['hot_sale_card_type']
          title?: string
          description?: string | null
          city?: string
          society?: string | null
          asking_price?: number
          images?: Json
          scope?: Database['public']['Enums']['hot_sale_card_scope']
          target_cities?: string[] | null
          duration_hours?: number
          expires_at?: string
          status?: Database['public']['Enums']['hot_sale_card_status']
          accepted_offer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'hot_sale_cards_dealer_id_fkey'
            columns: ['dealer_id']
            referencedRelation: 'dealers'
            referencedColumns: ['id']
          },
        ]
      }
      hot_sale_offers: {
        Row: {
          id: string
          card_id: string
          buyer_name: string
          buyer_phone: string
          offer_amount: number
          message: string | null
          status: Database['public']['Enums']['hot_sale_offer_status']
          created_at: string
        }
        Insert: {
          id?: string
          card_id: string
          buyer_name: string
          buyer_phone: string
          offer_amount: number
          message?: string | null
          status?: Database['public']['Enums']['hot_sale_offer_status']
          created_at?: string
        }
        Update: {
          buyer_name?: string
          buyer_phone?: string
          offer_amount?: number
          message?: string | null
          status?: Database['public']['Enums']['hot_sale_offer_status']
        }
        Relationships: [
          {
            foreignKeyName: 'hot_sale_offers_card_id_fkey'
            columns: ['card_id']
            referencedRelation: 'hot_sale_cards'
            referencedColumns: ['id']
          },
        ]
      }
      inquiries: {
        Row: {
          id: string
          property_id: string | null
          dealer_id: string
          source: Database['public']['Enums']['inquiry_source']
          buyer_name: string
          buyer_phone: string
          buyer_email: string | null
          message: string | null
          status: Database['public']['Enums']['inquiry_status']
          ai_query: string | null
          created_at: string
        }
        Insert: {
          id?: string
          property_id?: string | null
          dealer_id: string
          source?: Database['public']['Enums']['inquiry_source']
          buyer_name: string
          buyer_phone: string
          buyer_email?: string | null
          message?: string | null
          status?: Database['public']['Enums']['inquiry_status']
          ai_query?: string | null
          created_at?: string
        }
        Update: {
          property_id?: string | null
          dealer_id?: string
          source?: Database['public']['Enums']['inquiry_source']
          buyer_name?: string
          buyer_phone?: string
          buyer_email?: string | null
          message?: string | null
          status?: Database['public']['Enums']['inquiry_status']
          ai_query?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'inquiries_dealer_id_fkey'
            columns: ['dealer_id']
            referencedRelation: 'dealers'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'inquiries_property_id_fkey'
            columns: ['property_id']
            referencedRelation: 'properties'
            referencedColumns: ['id']
          },
        ]
      }
      payments: {
        Row: {
          id: string
          dealer_id: string
          subscription_id: string | null
          gateway: Database['public']['Enums']['payment_gateway']
          gateway_transaction_id: string | null
          gateway_reference_number: string | null
          amount: number
          status: Database['public']['Enums']['payment_status']
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          dealer_id: string
          subscription_id?: string | null
          gateway: Database['public']['Enums']['payment_gateway']
          gateway_transaction_id?: string | null
          gateway_reference_number?: string | null
          amount: number
          status?: Database['public']['Enums']['payment_status']
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          subscription_id?: string | null
          gateway?: Database['public']['Enums']['payment_gateway']
          gateway_transaction_id?: string | null
          gateway_reference_number?: string | null
          amount?: number
          status?: Database['public']['Enums']['payment_status']
          metadata?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'payments_dealer_id_fkey'
            columns: ['dealer_id']
            referencedRelation: 'dealers'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'payments_subscription_id_fkey'
            columns: ['subscription_id']
            referencedRelation: 'subscriptions'
            referencedColumns: ['id']
          },
        ]
      }
      phases_blocks: {
        Row: {
          id: number
          society_id: number
          name: string
          slug: string
          is_active: boolean
        }
        Insert: {
          id?: number
          society_id: number
          name: string
          slug: string
          is_active?: boolean
        }
        Update: {
          society_id?: number
          name?: string
          slug?: string
          is_active?: boolean
        }
        Relationships: [
          {
            foreignKeyName: 'phases_blocks_society_id_fkey'
            columns: ['society_id']
            referencedRelation: 'societies'
            referencedColumns: ['id']
          },
        ]
      }
      pricing_config: {
        Row: {
          id: number
          cycle: Database['public']['Enums']['subscription_cycle']
          months: number
          price_per_month: number
          total_price: number
          is_active: boolean
          updated_at: string
        }
        Insert: {
          id?: number
          cycle: Database['public']['Enums']['subscription_cycle']
          months: number
          price_per_month: number
          total_price: number
          is_active?: boolean
          updated_at?: string
        }
        Update: {
          cycle?: Database['public']['Enums']['subscription_cycle']
          months?: number
          price_per_month?: number
          total_price?: number
          is_active?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          role: Database['public']['Enums']['user_role']
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          phone?: string | null
          role?: Database['public']['Enums']['user_role']
          created_at?: string
          updated_at?: string
        }
        Update: {
          email?: string
          full_name?: string | null
          phone?: string | null
          role?: Database['public']['Enums']['user_role']
          updated_at?: string
        }
        Relationships: []
      }
      properties: {
        Row: {
          id: string
          dealer_id: string
          title: string
          description: string | null
          purpose: Database['public']['Enums']['listing_purpose']
          type: Database['public']['Enums']['listing_type']
          city_id: number
          society_id: number | null
          phase_block_id: number | null
          address: string | null
          price: number
          price_negotiable: boolean
          area: number
          area_unit: Database['public']['Enums']['area_unit']
          bedrooms: number | null
          bathrooms: number | null
          floors: number | null
          features: string[] | null
          geo: unknown | null
          status: Database['public']['Enums']['listing_status']
          is_featured: boolean
          views_count: number
          search_vector: unknown | null
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          dealer_id: string
          title: string
          description?: string | null
          purpose: Database['public']['Enums']['listing_purpose']
          type: Database['public']['Enums']['listing_type']
          city_id: number
          society_id?: number | null
          phase_block_id?: number | null
          address?: string | null
          price: number
          price_negotiable?: boolean
          area: number
          area_unit?: Database['public']['Enums']['area_unit']
          bedrooms?: number | null
          bathrooms?: number | null
          floors?: number | null
          features?: string[] | null
          geo?: unknown | null
          status?: Database['public']['Enums']['listing_status']
          is_featured?: boolean
          views_count?: number
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          dealer_id?: string
          title?: string
          description?: string | null
          purpose?: Database['public']['Enums']['listing_purpose']
          type?: Database['public']['Enums']['listing_type']
          city_id?: number
          society_id?: number | null
          phase_block_id?: number | null
          address?: string | null
          price?: number
          price_negotiable?: boolean
          area?: number
          area_unit?: Database['public']['Enums']['area_unit']
          bedrooms?: number | null
          bathrooms?: number | null
          floors?: number | null
          features?: string[] | null
          geo?: unknown | null
          status?: Database['public']['Enums']['listing_status']
          is_featured?: boolean
          views_count?: number
          updated_at?: string
          deleted_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'properties_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'properties_dealer_id_fkey'
            columns: ['dealer_id']
            referencedRelation: 'dealers'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'properties_phase_block_id_fkey'
            columns: ['phase_block_id']
            referencedRelation: 'phases_blocks'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'properties_society_id_fkey'
            columns: ['society_id']
            referencedRelation: 'societies'
            referencedColumns: ['id']
          },
        ]
      }
      property_images: {
        Row: {
          id: string
          property_id: string
          storage_path: string
          url: string
          display_order: number
          is_primary: boolean
          created_at: string
        }
        Insert: {
          id?: string
          property_id: string
          storage_path: string
          url: string
          display_order?: number
          is_primary?: boolean
          created_at?: string
        }
        Update: {
          property_id?: string
          storage_path?: string
          url?: string
          display_order?: number
          is_primary?: boolean
        }
        Relationships: [
          {
            foreignKeyName: 'property_images_property_id_fkey'
            columns: ['property_id']
            referencedRelation: 'properties'
            referencedColumns: ['id']
          },
        ]
      }
      reserved_slugs: {
        Row: { slug: string }
        Insert: { slug: string }
        Update: { slug?: string }
        Relationships: []
      }
      societies: {
        Row: {
          id: number
          city_id: number
          name: string
          slug: string
          is_active: boolean
        }
        Insert: {
          id?: number
          city_id: number
          name: string
          slug: string
          is_active?: boolean
        }
        Update: {
          city_id?: number
          name?: string
          slug?: string
          is_active?: boolean
        }
        Relationships: [
          {
            foreignKeyName: 'societies_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          },
        ]
      }
      subscriptions: {
        Row: {
          id: string
          dealer_id: string
          cycle: Database['public']['Enums']['subscription_cycle']
          amount: number
          starts_at: string
          expires_at: string
          status: Database['public']['Enums']['subscription_status']
          created_at: string
        }
        Insert: {
          id?: string
          dealer_id: string
          cycle: Database['public']['Enums']['subscription_cycle']
          amount: number
          starts_at: string
          expires_at: string
          status?: Database['public']['Enums']['subscription_status']
          created_at?: string
        }
        Update: {
          cycle?: Database['public']['Enums']['subscription_cycle']
          amount?: number
          starts_at?: string
          expires_at?: string
          status?: Database['public']['Enums']['subscription_status']
        }
        Relationships: [
          {
            foreignKeyName: 'subscriptions_dealer_id_fkey'
            columns: ['dealer_id']
            referencedRelation: 'dealers'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: Record<string, never>
    Functions: {
      current_dealer_id: {
        Args: Record<string, never>
        Returns: string
      }
      dealer_subscription_active: {
        Args: { p_dealer_id: string }
        Returns: boolean
      }
    }
    Enums: {
      area_unit: 'marla' | 'kanal' | 'sqft' | 'sqyd'
      // Hot Sale enums (Milestone 7)
      hot_sale_card_type:   'plot' | 'house' | 'file' | 'flat' | 'commercial'
      hot_sale_card_scope:  'all_pakistan' | 'cities'
      hot_sale_card_status: 'active' | 'accepted' | 'expired' | 'cancelled'
      hot_sale_offer_status:'pending' | 'accepted' | 'declined' | 'closed'
      inquiry_source: 'site' | 'ai_assistant'
      inquiry_status: 'new' | 'contacted' | 'closed'
      listing_purpose: 'sale' | 'rent'
      listing_status: 'active' | 'inactive' | 'sold' | 'rented'
      listing_type: 'plot' | 'house' | 'apartment' | 'commercial' | 'file' | 'farmhouse'
      payment_gateway: 'jazzcash' | 'easypaisa' | 'safepay'
      payment_status: 'pending' | 'completed' | 'failed' | 'refunded'
      subscription_cycle: 'two_month' | 'six_month' | 'twelve_month'
      subscription_status: 'active' | 'expired' | 'cancelled' | 'pending'
      user_role: 'dealer' | 'admin'
    }
    CompositeTypes: Record<string, never>
  }
}

// Convenience helpers
export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> =
  Database['public']['Enums'][T]
export type TablesInsert<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Update']
