'use client';

import useHydrate from '@/hooks/useHydrate';
import { createSupabaseBrowserClient } from '@/lib/client/supabase';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import React, { useCallback, useEffect, useState } from 'react';

const AuthUI = () => {
  const [user, setUser] = useState();
  const supabase = createSupabaseBrowserClient();
  const isMount = useHydrate();

  const getUserInfo = useCallback(() => {
    async () => {
      const result = supabase.auth.getUser();
      console.log(result);

      if ((await result)?.data?.user) {
        setUser((await result)?.data?.user);
      }
    };
  }, [supabase]);

  const handleLogout = async () => {
    supabase.auth.signOut();
    window.location.reload();
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  const handleGithubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  if (!isMount) {
    return null;
  }

  return (
    <section className="w-full p-10">
      <div>{user ? `로그인 됨 ${user?.email}` : '로그아웃'}</div>
      <>
        {user && (
          <button onClick={handleLogout} className="border-2 border-black">
            로그아웃
          </button>
        )}
      </>
      <div className="mx-auto max-w-[500px]">
        <Auth
          redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          onlyThirdPartyProviders
          providers={['google', 'github']}
        />
      </div>
    </section>
  );
};

export default AuthUI;
