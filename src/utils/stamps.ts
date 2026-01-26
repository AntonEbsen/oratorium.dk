import { createClient } from '@supabase/supabase-js';
import { STAMPS } from '../data/stamps';

// We need a client that can write to user_stamps. 
// If RLS is set to "Users can insert own stamps", the anon client works if session is set.
// But this utility might be used in diverse contexts. 
// For now, we assume it's called from CLIENT SIDE where we have the session implicitly via the client passed in.

export async function checkAndAwardStamp(client: any, userId: string, stampId: string) {
    // 1. Check if stamp exists
    const stampDef = STAMPS.find(s => s.id === stampId);
    if (!stampDef) return { awarded: false, error: 'Invalid Stamp ID' };

    // 2. Check if user already has it
    const { data: existing } = await client
        .from('user_stamps')
        .select('id')
        .eq('user_id', userId)
        .eq('stamp_id', stampId)
        .maybeSingle();

    if (existing) return { awarded: false, reason: 'Already owned' };

    // 3. Award it
    const { error } = await client
        .from('user_stamps')
        .insert([{ user_id: userId, stamp_id: stampId }]);

    if (error) {
        console.error('Error awarding stamp:', error);
        return { awarded: false, error: error.message };
    }

    return { awarded: true, stamp: stampDef };
}
