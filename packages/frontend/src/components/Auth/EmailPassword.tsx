import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInMutation } from '../../queries';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import Link from '../ui/Link';

type Props = {
    onSignIn(): void;
    onRequiresTOTP(): void;
};

export default function EmailPassword({ onSignIn, onRequiresTOTP }: Props) {
    const { register, errors, handleSubmit } = useForm();
    const [signIn, { data, loading }] = useSignInMutation();

    useEffect(() => {
        if (data) {
            if (data.signIn.requiresTOTP) {
                onRequiresTOTP();
            } else {
                onSignIn();
            }
        }
    }, [data, onSignIn, onRequiresTOTP]);

    const onFinish = (values: Record<string, string>) => {
        signIn({
            variables: {
                email: values.email,
                password: values.password,
            },
        });
    };

    const params = {
        client_id: 'c30bdab49350c27729d7',
        // TODO: Do we need this?
        redirect_uri: `${location.origin}/auth/github/callback`,
        scope: 'read:user user:email'
    };

    return (
        <form className="grid grid-cols-1 row-gap-6" onSubmit={handleSubmit(onFinish)}>
            <Input
                label="Email address"
                name="email"
                ref={register({ required: true })}
                autoFocus
            />
            <Input
                label="Password"
                name="password"
                type="password"
                ref={register({ required: true })}
            />
            <div className="flex items-center justify-between">
                <Checkbox />
                <span className="text-sm leading-5">
                    <Link to="/auth/forgot">Forgot your password?</Link>
                </span>
            </div>
            <Button type="submit" variant="primary" disabled={loading} fullWidth>
                Sign In
            </Button>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
            </div>
            <div>
                <span className="w-full inline-flex rounded-md shadow-sm">
                    {/* We should serialize the redirection target and put it in the state here: */}
                    <a
                        href={`https://github.com/login/oauth/authorize?${new URLSearchParams(params).toString()}`}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                    >
                        <svg className="h-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fill-rule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </span>
            </div>
        </form>
    );
}
